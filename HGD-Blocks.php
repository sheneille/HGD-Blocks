<?php
/**
 * Plugin Name: HGD-Blocks
 * Plugin URI:git@github.com:sheneille/HGD-Blocks.git
 * Description: 
 * Author: Sheneille
 * Author URI: https://www.github,com/sheneille
 * Version: 0.0.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package GB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Define global constants.
 *
 * @since 1.0.0
 */
// Plugin version.
if ( ! defined( 'GB_VERSION' ) ) {
	define( 'GB_VERSION', '1.0.0' );
}

if ( ! defined( 'GB_NAME' ) ) {
	define( 'GB_NAME', trim( dirname( plugin_basename( __FILE__ ) ), '/' ) );
}

if ( ! defined( 'GB_DIR' ) ) {
	define( 'GB_DIR', WP_PLUGIN_DIR . '/' . GB_NAME );
}

if ( ! defined( 'GB_URL' ) ) {
	define( 'GB_URL', WP_PLUGIN_URL . '/' . GB_NAME );
}



/**
 * BLOCK: IconText Block
 */
require_once( GB_DIR . '/block/01-icon-text/index.php' );

/**
 * BLOCK: Cscard Block
 */
require_once( GB_DIR . '/block/02-cscard/index.php' );

/**
 * BLOCK: Button Text
 */
require_once( GB_DIR . '/block/03-button-text/index.php' );