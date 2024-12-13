<?php

/**
 * Tabs Block template.
 *
 * @param array $block The block settings and attributes.
 */

$tabs = get_field('tabs');
$baseTabClasses = "cursor-pointer lg:bg-neutral-500 lg:text-neutral-100 -skew-x-12 px-8 py-6 origin-bottom-left duration-200
                   aria-selected:text-neutral-100 aria-selected:bg-neutral-500
                   lg:hover:scale-y-105
                   lg:aria-selected:scale-y-105 lg:aria-selected:bg-neutral-100 lg:aria-selected:text-neutral-950
                   lg:max-w-[12.5%]
                   border-r border-neutral-500 border-b border-b-neutral-500 lg:border-r-neutral-100";

$firstTabClasses = "relative 
                    lg:aria-selected:border-r-0
                    lg:border-r-2 
                    aria-selected:before:bg-neutral-500 before:duration-200
                    before:content-[''] before:absolute before:h-full before:w-screen before:-left-[calc(100vw-1px)] lg:before:bg-neutral-500 before:inset-0
                    lg:before:aria-selected:bg-neutral-100
                    lg:border-b-0";

$tabClasses = "lg:aria-selected:border-b-transparent lg-border-r-0  lg:border-r-0 lg:border-r-2";

?>

<section class="block-tabs">
  <div class="tabs">
    <div
      class="tabs-list justify-center lg:flex items-stretch lg:bg-neutral-500 overflow-x-clip grid grid-cols-2"
      role="tablist">
      <?php foreach ($tabs as $index => $tab): ?>
        <button
          class="<?php echo $baseTabClasses ?> <?php echo $index === 0 ? $firstTabClasses : $tabClasses ?>"
          id="tab-<?php echo $index ?>"
          type="button"
          role="tab"
          aria-selected="true"
          aria-controls="tabpanel-<?php echo $index ?>">
          <span class="skew-x-12 inline-block uppercase lg:font-bold text-[15px] tracking-[1.88px]">
            <?php echo esc_html($tab['heading']) ?>
          </span>
        </button>
      <?php endforeach ?>

    </div>

    <div class="tabs-content">
      <?php foreach ($tabs as $index => $tab): ?>
        <div
          class="relative"
          id="tabpanel-<?php echo $index ?>"
          role="tabpanel"
          aria-labelledby="tab-<?php echo $index ?>">
          <div class="grid grid-cols-1 lg:grid-cols-12 absolute inset-0 size-full pointer-events-none">
            <div class="absolute w-full h-[400px] bottom-0 lg:h-full lg:relative lg:col-span-7 lg:col-start-6 overflow-clip
            [clip-path:polygon(0_38%,_100%_0,_100%_100%,_0%_100%)]
            lg:[clip-path:polygon(16%_0,_100%_0%,_100%_100%,_0%_100%)]">
              <?php echo wp_get_attachment_image($tab['image'], 'full', false, array('class' => 'absolute inset-0 w-full h-full object-cover size-full')); ?>
            </div>
          </div>
          <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 pt-9 pb-[400px] lg:py-36">
              <div class="col-span-5">
                <h2 class="text-4xl lg:text-6xl font-serif relative">
                  <?php echo $tab['heading']  ?>
                </h2>
                <div class="text-[15px] mt-6">
                  <?php echo wp_kses_post($tab['content']) ?>
                </div>
                <?php if ($tab['cta']): ?>
                  <div class="mt-10">
                    <a href="<?php echo esc_url($tab['cta']['url']) ?>"
                      class="hdc-btn">
                      <?php echo esc_html($tab['cta']['title']) ?>
                    </a>
                  </div>
                <?php endif ?>
              </div>
              <div class="">
                <!-- empty -->
              </div>
            </div>
          </div>
        </div>
      <?php endforeach ?>

    </div>

  </div>
</section>