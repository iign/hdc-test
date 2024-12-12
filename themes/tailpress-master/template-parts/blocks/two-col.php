<?php

$heading = get_field('heading');
$content = get_field('content');

$anchor = '';
if (! empty($block['anchor'])) {
  $anchor = 'id="' . esc_attr($block['anchor']) . '" ';
}

?>

<section <?php echo esc_attr($anchor); ?> class="block-two-col py-9 lg:py-32 bg-neutral-200">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h2 class="text-4xl lg:text-6xl font-serif relative">
          <svg class="hidden lg:inline absolute top-1/2 -translate-x-full -left-9 -translate-y-1/2 w-6 h-auto text-blue group-hover:text-lime" xmlns="http://www.w3.org/2000/svg" width="25.361" height="18.93" viewBox="0 0 25.361 18.93">
            <path id="Path_44037" data-name="Path 44037" d="M864.62,0l4.732,12.68,4.733,12.681,4.732-12.681L883.55,0Z" transform="translate(0 883.551) rotate(-90)" fill="currentColor"></path>
          </svg>
          <?php echo wp_kses_post($heading) ?>
        </h2>
      </div>
      <div class="space-y-4 text-[15px] leading-normal text-neutral-900">
        <?php echo wp_kses_post($content) ?>
      </div>
    </div>
  </div>
</section>