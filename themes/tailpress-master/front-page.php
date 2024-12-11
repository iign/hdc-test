<?php get_header(); ?>



<?php if (have_posts()) : ?>
  <?php
  while (have_posts()) :
    the_post();
  ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>


      <?php the_content(); ?>

      <section class="py-14 bg-neutral-200" hidden>
        <div class="container mx-auto">
          <div class="main-feature">
            <div class="div-1">
              <h2 class="font-serif text-4xl lg:text-6xl">
                Prem<span class="italic">i</span>er
                <br>
                <span class="text-teal-600">Property Management</span>
              </h2>
            </div>


            <div class="div-2 main-img">
              <img src="http://rkw.local/wp-content/uploads/2024/12/linkedin-sales-solutions-1LyBcHrH4J8-unsplash.jpg" alt="Team image"
                class="">
            </div>
            <div class="hidden lg:block div-3">
              <img src="http://rkw.local/wp-content/uploads/2024/12/AdobeStock_295482970@2x.png" alt="Interior design"
                class="">
            </div>
            <div class="hidden lg:block div-5">
              <img src="http://rkw.local/wp-content/uploads/2024/12/linkedin-sales-solutions-1LyBcHrH4J8-unsplash.jpg" alt="Person with dog"
                class="">
            </div>


            <div class="div-4">
              <h3 class="uppercase font-sans font-medium text-neutral-900 mb-8 tracking-[1.88px]">SIGNATURE SAVVY INCLUDED</h3>
              <p class="text-neutral-900 text-sm mb-8 leading-normal">
                RKW Residential is a third-party multifamily property management company headquartered
                in Charlotte, NC and Miami, FL with regional offices in Atlanta, Orlando and Raleigh.
                Our growing footprint across nine states includes more than 35,000 units under
                management and consultation. Led by expertise at every level and an industry-leading
                TechStack, our commitment to extraordinary drives value for our residents, clients,
                and team members.
              </p>
              <button class="hdc-btn">
                View Our Services
              </button>
            </div>
          </div>

        </div>
      </section>


    </article>

  <?php endwhile; ?>

<?php endif; ?>

<?php
get_footer();
