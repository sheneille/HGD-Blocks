<?php

/**
 * BLOCK: Button Text
 * 
 * Gutenberg Custom Button Text Block assets.
 * 
 * @since 0.0.1
 * @package HGD
 * @author Shantanu Desai <shantanu2846@gmail.com>
 */
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

add_action( 'enqueue_block_editor_assets', 'hgd_block_03_block_button_text_assets' );

/**
 * Enqueue the block's assets for the editor
 * 
 * @since 0.0.1
 */
function hgd_block_03_block_button_text_assets() {

	wp_enqueue_script(
		'hgd-block-03-buton-text',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), 
		filemtime( plugin_dir_path( __FILE__ ) . 'blocks.js' )
	);
	
	wp_enqueue_style(
		'hgd-block-03-buton-text-editor', 
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__) . 'editor.css' )
		);
}
