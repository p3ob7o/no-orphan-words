<?php
/**
 * Plugin Name: No Orphan Words
 * Description: Replaces the last space in paragraphs and headings with a non-breaking space on front-end display.
 * Version: 1.0
 * Author: Paolo Belcastro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function no_orphan_words_enqueue_script() {
    if ( ! is_admin() ) {
        wp_enqueue_script(
            'no-orphan-words',
            plugin_dir_url( __FILE__ ) . 'js/no-orphan-words.js',
            array(),
            '1.0',
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'no_orphan_words_enqueue_script' );