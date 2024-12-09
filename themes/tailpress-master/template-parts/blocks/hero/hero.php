<?php
$headline = get_field('headline');
$hero_gallery = get_field('hero_gallery');
?>

<div class="relative flex items-center justify-center h-[90vh] text-white">
  <?php if ($hero_gallery): ?>

    <div id="hero-splide" class="splide absolute inset-0 w-full h-full" role="group">
      <div class="splide__track h-full w-full inset-0">
        <ul class="splide__list h-full w-full inset-0">
          <?php foreach ($hero_gallery as $image): ?>
            <li class="splide__slide inset-0 w-full h-full relative">
              <?php echo wp_get_attachment_image($image['ID'], 'full', false, array('class' => 'object-cover object-center w-full h-full absolute')); ?>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  <?php endif; ?>


  <div class="absolute inset-0 bg-black bg-opacity-60"></div>


  <div class="absolute text-center px-4 z-10">
    <?php if ($headline): ?>
      <h1 class="hero__heading font-normal font-serif text-4xl lg:text-6xl lg:px-10 px-4 text-pretty">
        <?php echo nl2br(esc_html($headline)); ?>
      </h1>
    <?php endif; ?>
  </div>
</div>