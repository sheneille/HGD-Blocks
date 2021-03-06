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

add_action( 'enqueue_block_editor_assets', 'hgd_block_03_block_button_text_editor_assets' );

/**
 * Enqueue the block's assets for the editor
 * 
 * @since 0.0.1
 */
function hgd_block_03_block_button_text_editor_assets() {

	wp_enqueue_script(
		'hgd-block-03-buton-text',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' )
	);
	
	wp_enqueue_style(
		'hgd-block-03-buton-text-editor', 
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' )
	);
}


add_action( 'enqueue_block_assets', 'hgd_block_03_block_button_text_frontend_assets' );

/**
 * Enqueue the block's assets for the frontend
 * 
 * @since 0.0.1
 */

function hgd_block_03_block_button_text_frontend_assets() {
	
	wp_enqueue_style(
		'hgd-block-03-buton-text-frontend', 
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' )
	);
}
