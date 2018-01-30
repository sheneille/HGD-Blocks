<?php

/**
 * BLOCK: CaseStudyCard Block
 *
 * Gutenberg Custom Icon Text Block assets.
 *
 * @since   0.0.1
 * @package HGD
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'hgd_block_02_block_cscard_editor_assets' );
/**
 * Enqueue the block's assets for the editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 0.0.1
 */
function hgd_block_02_block_cscard_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'hgd-block-02-block-cscard', // Handle.
		plugins_url( 'block.js', __FILE__ ), // Block.js: We register the block here.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // filemtime — Gets file modification time.
	);

	// Styles.
	wp_enqueue_style(
		'hgd-block-02-block-cscard-editor', // Handle.
		plugins_url( 'editor.css', __FILE__ ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	);
} // End function hgd_block_02_block_cscard_editor_assets().

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'hgd_block_02_block_cscard_block_assets' );

/**
 * Enqueue the block's assets for the frontend.
 *
 * @since 1.0.0
 */
function hgd_block_02_block_cscard_block_assets() {
	// Styles.
	wp_enqueue_style(
		'hgd-block-02-block-cscard-frontend', // Handle.
		plugins_url( 'style.css', __FILE__ ), // Block frontend CSS.
		array( 'wp-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	);
} // End function hgd_block_02_block_cscard_block_assets().

