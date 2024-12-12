<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">

  <?php wp_head(); ?>
</head>

<body <?php body_class('bg-white text-[#151515] antialiased'); ?>>

  <?php do_action('tailpress_site_before'); ?>

  <div id="page" class="min-h-screen flex flex-col">

    <?php do_action('tailpress_header'); ?>

    <header class="bg-neutral-900 max-h-screen flex flex-col top-0 w-full fixed lg:relative z-50">
      <button href="#" aria-label="Toggle navigation" id="primary-menu-toggle" aria-controls="primary-menu"
        aria-expanded="false"
        class="text-white py-5 mx-auto text-center flex items-center justify-center cursor-pointer w-full lg:hidden">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <div id="mobile-menu" class=" overflow-auto flex-col pt-10 px-4 pb-14 bg-neutral-900 w-full flex-grow justify-start items-center hidden">
        <div class="flex flex-col items-center">
          <?php if (has_custom_logo()): ?>
            <?php the_custom_logo(); ?>
          <?php else: ?>
            <a href="<?php echo get_bloginfo('url'); ?>" class="max-w-[75px]">
              <span class="sr-only"><?php echo get_bloginfo('name'); ?></span>
              <img src="<?php echo get_template_directory_uri(); ?>/resources/images/logo.svg" alt="<?php echo get_bloginfo('name'); ?>" class="h-8">
            </a>
          <?php endif ?>
        </div>

        <?php
        wp_nav_menu(
          array(
            'container_id'    => 'primary-menu',
            'container_class' => 'w-full px-4',
            'menu_class'      => 'font-serif mt-10 space-y-2',
            'theme_location'  => 'primary',
            'li_class'        => 'text-white text-center [&>a]:text-[38px] [&.current-menu-item]:text-blue-light',
            'fallback_cb'     => false,
          )
        );
        ?>

        <div>
          <?php
          wp_nav_menu(
            array(
              'container_id'    => 'social-menu',
              'container_class' => 'flex items-center justify-content-center mt-10',
              'menu_class'      => 'mx-auto flex items-center justify-content-center gap-4',
              'theme_location'  => 'social',
              'li_class'        => 'text-[#C9E500]',
              'fallback_cb'     => false,
            )
          );
          ?>
        </div>
      </div>

      <div id="desktop-menu" class="absolute top-0 pt-16 w-full hidden lg:block">
        <div class="container mx-auto">
          <div class="flex items-center justify-between">
            <?php if (has_custom_logo()): ?>
              <?php the_custom_logo(); ?>
            <?php else: ?>
              <a href="<?php echo get_bloginfo('url'); ?>">
                <span class="sr-only"><?php echo get_bloginfo('name'); ?></span>
                <img src="<?php echo get_template_directory_uri(); ?>/resources/images/logo.svg" alt="<?php echo get_bloginfo('name'); ?>" class="w-28 h-auto">
              </a>
            <?php endif ?>

            <?php
            wp_nav_menu(
              array(
                'container_id'    => 'primary-menu',
                'container_class' => '',
                'menu_class'      => 'font-sans flex gap-12',
                'theme_location'  => 'primary',
                'li_class'        => 'text-white uppercase font-medium text-[15px] text-neutral-100 tracking-[1.88px]',
                'fallback_cb'     => false,
              )
            );
            ?>
          </div>

        </div>
      </div>

    </header>

    <div id="content" class="site-content flex-grow">

      <?php do_action('tailpress_content_start'); ?>

      <main>