<?php

/**
 * Theme setup.
 */
function tailpress_setup()
{
  add_theme_support('title-tag');

  register_nav_menus(
    array(
      'primary' => __('Primary Menu', 'tailpress'),
      'social' => __('Social Menu', 'tailpress'),
    )
  );

  add_theme_support(
    'html5',
    array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    )
  );

  add_theme_support('custom-logo');
  add_theme_support('post-thumbnails');

  add_theme_support('align-wide');
  add_theme_support('wp-block-styles');

  add_theme_support('responsive-embeds');

  add_theme_support('editor-styles');
  add_editor_style('css/editor-style.css');
}

add_action('after_setup_theme', 'tailpress_setup');

/**
 * Enqueue theme assets.
 */
function tailpress_enqueue_scripts()
{
  $theme = wp_get_theme();

  wp_enqueue_style('tailpress', tailpress_asset('css/app.css'), array(), $theme->get('Version'));
  wp_enqueue_script('tailpress', tailpress_asset('js/app.js'), array(), $theme->get('Version'));
}

add_action('wp_enqueue_scripts', 'tailpress_enqueue_scripts');

/**
 * Get asset path.
 *
 * @param string  $path Path to asset.
 *
 * @return string
 */
function tailpress_asset($path)
{
  if (wp_get_environment_type() === 'production') {
    return get_stylesheet_directory_uri() . '/' . $path;
  }

  return add_query_arg('time', time(),  get_stylesheet_directory_uri() . '/' . $path);
}

/**
 * Adds option 'li_class' to 'wp_nav_menu'.
 *
 * @param string  $classes String of classes.
 * @param mixed   $item The current item.
 * @param WP_Term $args Holds the nav menu arguments.
 *
 * @return array
 */
function tailpress_nav_menu_add_li_class($classes, $item, $args, $depth)
{
  if (isset($args->li_class)) {
    $classes[] = $args->li_class;
  }

  if (isset($args->{"li_class_$depth"})) {
    $classes[] = $args->{"li_class_$depth"};
  }

  return $classes;
}

add_filter('nav_menu_css_class', 'tailpress_nav_menu_add_li_class', 10, 4);

/**
 * Adds option 'submenu_class' to 'wp_nav_menu'.
 *
 * @param string  $classes String of classes.
 * @param mixed   $item The current item.
 * @param WP_Term $args Holds the nav menu arguments.
 *
 * @return array
 */
function tailpress_nav_menu_add_submenu_class($classes, $args, $depth)
{
  if (isset($args->submenu_class)) {
    $classes[] = $args->submenu_class;
  }

  if (isset($args->{"submenu_class_$depth"})) {
    $classes[] = $args->{"submenu_class_$depth"};
  }

  return $classes;
}

add_filter('nav_menu_submenu_css_class', 'tailpress_nav_menu_add_submenu_class', 10, 3);

add_action('acf/init', function () {
  // Register the Hero Block
  if (function_exists('acf_register_block_type')) {
    acf_register_block_type(array(
      'name'              => 'hero',
      'title'             => __('Hero'),
      'description'       => __('A custom hero block.'),
      'render_template'   => 'template-parts/blocks/hero/hero.php',
      'category'          => 'formatting',
      'icon'              => 'cover-image',
      'keywords'          => array('hero', 'banner', 'header'),
      'supports'          => array(
        'align' => false,
      ),
    ));
  }


  if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
      'key' => 'group_hero_block',
      'title' => 'Hero Block Fields',
      'fields' => array(
        array(
          'key' => 'field_hero_headline',
          'label' => 'Headline',
          'name' => 'headline',
          'type' => 'textarea',
          'instructions' => 'Enter the headline text.',
          'required' => 1,
        ),
        array(
          'key' => 'field_hero_gallery',
          'label' => 'Hero Gallery',
          'name' => 'hero_gallery',
          'type' => 'gallery',
          'instructions' => 'Upload one or more images for the hero block.',
          'required' => 1,
          'return_format' => 'array', // Or 'url', 'id'
          'preview_size' => 'medium',
          'library' => 'all',
        ),
      ),
      'location' => array(
        array(
          array(
            'param' => 'block',
            'operator' => '==',
            'value' => 'acf/hero',
          ),
        ),
      ),
    ));
  }
});

add_action('init', function () {
  $theme = wp_get_theme();

  wp_register_script(
    'theme-main-feature',
    get_template_directory_uri() . '/blocks/main-feature/block.build.js',
    ['wp-blocks', 'wp-editor', 'wp-components', 'wp-element'],
    $theme->get('Version')
  );

  wp_register_style(
    'theme-main-feature-editor',
    get_template_directory_uri() . '/blocks/main-feature/editor.css',
    [],
    $theme->get('Version')
  );

  wp_register_style(
    'theme-main-feature-style',
    get_template_directory_uri() . '/blocks/main-feature/style.css',
    [],
    $theme->get('Version')
  );

  register_block_type('theme/main-feature', [
    'editor_script' => 'theme-main-feature',
    'editor_style' => 'theme-main-feature-editor',
    'style' => 'theme-main-feature-style',
  ]);
});
