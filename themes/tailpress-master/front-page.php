<?php get_header(); ?>



<?php if (have_posts()) : ?>
  <?php
  while (have_posts()) :
    the_post();
  ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>


      <?php the_content(
        sprintf(
          __('Continue reading %s', 'tailpress'),
          the_title('<span class="screen-reader-text">"', '"</span>', false)
        )
      ); ?>


    </article>

  <?php endwhile; ?>

<?php endif; ?>

<?php
get_footer();
