<?php
/**
 * Plugin Name:       WC Gdynie
 * Version:           0.1.0
 */

function create_block_wcgdynia_block_init() {
	register_block_type( __DIR__ . '/build/wcgdynia/hello' );
	register_block_type( __DIR__ . '/build/wcgdynia/buttons' );
	register_block_type( __DIR__ . '/build/wcgdynia/hero' );
	register_block_type( __DIR__ . '/build/wcgdynia/custom' );
	register_block_type( __DIR__ . '/build/wcgdynia/blockcontrols' );
}

add_action( 'init', 'create_block_wcgdynia_block_init' );



























function add_editor_styles() {
		add_editor_style( plugins_url( 'editor.css', __FILE__ ) );
}
add_action( 'admin_init', 'add_editor_styles' );
