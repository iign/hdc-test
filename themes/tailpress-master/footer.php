</main>

<?php do_action('tailpress_content_end'); ?>

</div>

<?php do_action('tailpress_content_after'); ?>

<footer id="colophon" class="site-footer bg-neutral-950 py-12" role="contentinfo">
  <?php do_action('tailpress_footer'); ?>

  <div class="container mx-auto text-center text-neutral-200">
    &copy; <?php echo date_i18n('Y'); ?> - <?php echo get_bloginfo('name'); ?>
  </div>
</footer>

</div>

<?php wp_footer(); ?>

</body>

</html>