<?php

/**
 * Two column with a slash Block template.
 *
 * @param array $block The block settings and attributes.
 */

$headline = get_field('headline');
$content = get_field('content');
$button = get_field('button');
$bright = get_field('bright_background');

$imageID = get_field('image');
$image = wp_get_attachment_image($imageID, 'full', false, array('class' => 'object-cover object-center w-full h-full absolute'));

$anchor = '';
if (! empty($block['anchor'])) {
  $anchor = 'id="' . esc_attr($block['anchor']) . '" ';
}

// convert to array
$class_name = [
  'block-two-col-slash',
  'pt-10',
  'lg:py-44',
  'overflow-clip',
  'relative',
];

$class_name = array_merge($class_name, $bright ?
  [
    'bg-neutral-100',
    'text-neutral-900'
  ] :
  [
    'bg-neutral-900',
    'text-white',
  ]);

if (! empty($block['className'])) {
  $class_name = array_merge($class_name, explode(' ', $block['className']));
}

$class_name = implode(' ', $class_name);

?>

<section <?php echo esc_attr($anchor); ?> class="<?php echo esc_attr($class_name); ?>" data-color="<?php echo $bright ? 'bright' : 'dark' ?>">
  <div class="grid-cols-2 absolute inset-0 w-full h-full hidden lg:grid">
    <div class="relative col-start-2">
      <div class="two-col-slash__tilt <?php echo $bright ? 'bg-neutral-100' : 'bg-neutral-900' ?>"></div>
      <?php echo wp_kses_post($image) ?>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="z-20 lg:pb-0 lg:col-span-5">
        <h2 class="font-serif text-4xl lg:text-6xl"><?php echo wp_kses_post($headline) ?></h2>

        <div class="font-sans text-[15px] max-w-80 mt-4">
          <?php echo wp_kses_post($content) ?>
        </div>

        <div class="mt-8">
          <a href="<?php echo esc_url($button['url']) ?>" class="hdc-btn <?php echo $bright ? '' : 'hdc-btn--white'  ?>">
            <?php echo  esc_html($button['title']) ?>
          </a>
        </div>
      </div>
      <div class="<?php echo $bright ? 'bg-neutral-100' : 'bg-neutral-900' ?> relative min-h-[400px] inset-x-0 w-[100vw] left-1/2 -translate-x-1/2 lg:hidden">
        <div class="two-col-slash__tilt <?php echo $bright ? 'bg-neutral-100' : 'bg-neutral-900' ?>"></div>
        <?php echo wp_kses_post($image) ?>
      </div>
    </div>
  </div>
</section>