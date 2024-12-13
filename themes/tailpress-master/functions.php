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

add_action('acf/init', function () {
  if (function_exists('acf_register_block_type')) {
    acf_register_block_type(array(
      'name'              => 'two-col-slash',
      'title'             => __('Two Column Slash'),
      'description'       => __('A custom two column slash block.'),
      'render_template'   => 'template-parts/blocks/two-col-slash.php',
      'category'          => 'formatting',
      'icon'              => 'cover-image',
      'keywords'          => array('two column', 'slash', 'text'),
      'supports'          => array(
        'align' => false,
      ),
    ));
  }
});


add_action('acf/init', function () {
  if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
      'key' => 'group_two_col_slash_block',
      'title' => 'Two Column Slash Block Fields',
      'fields' => array(
        array(
          'key' => 'field_two_col_slash_headline',
          'label' => 'Headline',
          'name' => 'headline',
          'type' => 'wysiwyg',
          'media_upload' => 0,
          'toolbar' => 'basic',
          'instructions' => 'Enter the headline text.',
          'required' => 1,
        ),
        array(
          'key' => 'field_two_col_slash_paragraph',
          'label' => 'Paragraph',
          'name' => 'content',
          'type' => 'wysiwyg',
          'media_upload' => 0,
          'toolbar' => 'basic',
          'rows' => 4,
          'instructions' => 'Enter the paragraph text.',
        ),
        array(
          'key' => 'field_two_col_slash_button',
          'label' => 'Button',
          'name' => 'button',
          'type' => 'link',
          'instructions' => 'Enter the button text and link.',
        ),
        array(
          'key' => 'field_two_col_slash_image',
          'label' => 'Image',
          'name' => 'image',
          'type' => 'image',
          'instructions' => 'Upload the image for the two column slash block.',
          'required' => 1,
          'return_format' => 'id',
          'preview_size' => 'medium',
          'library' => 'all',
        ),
        array(
          'key' => 'field_two_col_slash_bright_background',
          'label' => 'Bright background?',
          'name' => 'bright_background',
          'type' => 'true_false',
          'default_value' => 0,
        ),

      ),
      'location' => array(
        array(
          array(
            'param' => 'block',
            'operator' => '==',
            'value' => 'acf/two-col-slash',
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


add_action('acf/init', function () {
  if (function_exists('acf_register_block_type')) {
    acf_register_block_type(array(
      'name'              => 'two-col',
      'title'             => __('Two Column'),
      'description'       => __('A custom two column block.'),
      'render_template'   => 'template-parts/blocks/two-col.php',
      'category'          => 'formatting',
      'icon'              => 'cover-image',
      'keywords'          => array('two column', 'text'),
      'supports'          => array(
        'align' => false,
      ),
    ));
  }
});

add_action('acf/init', function () {
  if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
      'key' => 'group_two_col_block',
      'title' => 'Two Column Block Fields',
      'fields' => array(
        array(
          'key' => 'field_two_col_heading',
          'label' => 'Heading',
          'name' => 'heading',
          'type' => 'text',
          'media_upload' => 0,
          'toolbar' => 'basic',
          'instructions' => 'Enter the heading text.',
          'required' => 1,
        ),
        array(
          'key' => 'field_two_col_paragraph',
          'label' => 'Paragraph',
          'name' => 'content',
          'type' => 'wysiwyg',
          'media_upload' => 0,
          'toolbar' => 'basic',
          'rows' => 4,
          'instructions' => 'Enter the content.',
          'required' => 1,
        ),
      ),
      'location' => array(
        array(
          array(
            'param' => 'block',
            'operator' => '==',
            'value' => 'acf/two-col',
          ),
        ),
      ),
    ));
  }
});

/**
 * Tabs block
 */

add_action('acf/init', function () {
  if (function_exists('acf_register_block_type')) {
    acf_register_block_type(array(
      'name'              => 'tabs',
      'title'             => __('Tabs'),
      'description'       => __('A custom tabs block.'),
      'render_template'   => 'template-parts/blocks/tabs.php',
      'category'          => 'formatting',
      'icon'              => 'cover-image',
      'keywords'          => array('tabs', 'content'),
      'supports'          => array(
        'align' => false,
      ),
    ));
  }
});

add_action('acf/init', function () {
  if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
      'key' => 'group_tabs_block',
      'title' => 'Tabs Block Fields',
      'fields' => array(
        array(
          'key' => 'field_tabs',
          'label' => 'Tabs',
          'name' => 'tabs',
          'type' => 'repeater',
          'instructions' => 'Add tabs.',
          'min' => 1,
          'max' => 8,
          'required' => 1,
          'layout' => 'block',
          'button_label' => 'Add Tab',
          'sub_fields' => array(
            array(
              'key' => 'field_tabs_heading',
              'label' => 'Heading',
              'name' => 'heading',
              'type' => 'text',
              'instructions' => 'Enter the tab heading.',
              'required' => 1,
            ),
            array(
              'key' => 'field_tabs_content',
              'label' => 'Content',
              'name' => 'content',
              'type' => 'wysiwyg',
              'instructions' => 'Enter the tab content.',
              'required' => 1,
            ),
            array(
              'key' => 'field_tabs_image',
              'label' => 'Image',
              'name' => 'image',
              'type' => 'image',
              'instructions' => 'Upload the image for the tab.',
              'required' => 1,
              'return_format' => 'id',
              'preview_size' => 'medium',
              'library' => 'all',
            ),
            array(
              'key' => 'field_tabs_cta',
              'label' => 'Call to Action',
              'name' => 'cta',
              'type' => 'link',
              'instructions' => 'Enter the call to action text and link.',
            ),
          ),
        ),
      ),
      'location' => array(
        array(
          array(
            'param' => 'block',
            'operator' => '==',
            'value' => 'acf/tabs',
          ),
        ),
      ),
    ));
  }
});

// Add SVG support
// Use Safe SVG plugin in production
function enable_svg_uploads($mime_types)
{
  $mime_types['svg'] = 'image/svg+xml';
  return $mime_types;
}
add_filter('upload_mimes', 'enable_svg_uploads');
