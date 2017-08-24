<?php
require_once dirname(__FILE__) . '/inc/custom-routes.php';

require_once dirname(__FILE__) . '/inc/angular-enqueue.php';

require_once dirname(__FILE__) . '/class-tgm-plugin-activation.php';

class angularjs_wp_theme {

    const MENU_STRING = "header-footer-menu";

    function init() {

        add_action('init', array($this, 'register_my_menus'));
        add_action('init', array($this, 'register_my_sidebar'));
        add_action('after_setup_theme', array($this, 'add_awesome_theme_support'));
        add_action('admin_init', array($this, 'apiCheck'));


        ng2_enqueue::instance();
        angular_theme_routes::instance();
    }

    function apiCheck() {

        if (!class_exists('WP_REST_Response')) {
            add_action('admin_notices', array($this, 'apiError'));
        }
    }

    function apiError() {

        echo '<div class="error"><p><strong>JSON REST API</strong> must be installed and activated for this theme to work properly</p></div>';
    }

    /* THEME SUPPORT */

    function add_awesome_theme_support() {

        $this->register_required_theme_plugins();
        $this->addDefaultSettings();
        
        add_image_size( 'frontpage-carousele-size', 1110, 500, array( 'center', 'top' ) );        
        add_image_size( 'team-carousele-size', 200, 200, array( 'center', 'top' ) );

        add_theme_support('post-thumbnails');
        add_post_type_support('page', 'excerpt');
    }

    // REGISTER MENUS
    function register_my_menus() {

        register_nav_menus(
                array(
                    self::MENU_STRING => __('Header & Footer Menu'),
                )
        );
    }

    //REGISTER SIDEBAR
    function register_my_sidebar() {

        register_sidebar(array(
            'name' => 'Right Side',
            'id' => 'right-sidebar',
            'before_widget' => '<section>',
            'after_widget' => '</section>',
            'before_title' => '<h4>',
            'after_title' => '</h4>'
        ));
    }

    function register_required_theme_plugins() {

        /**
         * Array of plugin arrays. Required keys are name and slug.
         * If the source is NOT from the .org repo, then source is also required.
         */
        $plugins = array(
            // WP REST API filter parameter
            array(
                'name' => 'WP REST API filter parameter',
                'slug' => 'rest-filter-master',
                'source' => get_stylesheet_directory() . '/plugins/rest-filter-master.zip',
                'required' => true,
                'force_activation' => true,
                'force_deactivation' => false
            ),
            // WP REST API Menus
            array(
                'name' => 'WP REST API Menus',
                'slug' => 'wp-api-menus',
                'source' => get_stylesheet_directory() . '/plugins/wp-api-menus.zip',
                'required' => true,
                'force_activation' => true,
                'force_deactivation' => false
            ),
            array(
                'name' => 'WordPress Importer',
                'slug' => 'wordpress-importer',
                'source' => get_stylesheet_directory() . '/plugins/wordpress-importer.0.6.3.zip',
                'required' => true,
                'force_activation' => true,
                'force_deactivation' => false
            ),
            array(
                'name' => 'Display Posts Shortcode',
                'slug' => 'display-posts-shortcode',
                'source' => get_stylesheet_directory() . '/plugins/display-posts-shortcode.2.8.0.zip',
                'required' => true,
                'force_activation' => true,
                'force_deactivation' => false
            ),
            array(
                'name' => 'WP REST API Frontpage',
                'slug' => 'wp-rest-api-frontpage',
                'source' => get_stylesheet_directory() . '/plugins/wp-rest-api-frontpage.zip',
                'required' => true,
                'force_activation' => true,
                'force_deactivation' => false
            ),
            array(
                'name' => 'WP MEDIA LIBRARY CATEGORIES 1.5.6',
                'slug' => 'wp-media-library-categories',
                'source' => get_stylesheet_directory() . '/plugins/wp-media-library-categories.1.5.6.zip',
                'required' => true,
                'force_activation' => true,
                'force_deactivation' => false
            ),
        );


        /**
         * Array of configuration settings. Amend each line as needed.
         * If you want the default strings to be available under your own theme domain,
         * leave the strings uncommented.
         * Some of the strings are added into a sprintf, so see the comments at the
         * end of each line for what each argument will be.
         */
        $config = array(
            'default_path' => '', // Default absolute path to pre-packaged plugins.
            'menu' => 'tgmpa-install-plugins', // Menu slug.
            'has_notices' => true, // Show admin notices or not.
            'dismissable' => true, // If false, a user cannot dismiss the nag message.
            'dismiss_msg' => '', // If 'dismissable' is false, this message will be output at top of nag.
            'is_automatic' => true, // Automatically activate plugins after installation or not.
            'message' => '', // Message to output right before the plugins table.
            'strings' => array(
                'page_title' => __('Install Required Plugins', 'tgmpa'),
                'menu_title' => __('Install Plugins', 'tgmpa'),
                'installing' => __('Installing Plugin: %s', 'tgmpa'), // %s = plugin name.
                'oops' => __('Something went wrong with the plugin API.', 'tgmpa'),
                'notice_can_install_required' => _n_noop('This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.'), // %1$s = plugin name(s).
                'notice_can_install_recommended' => _n_noop('This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.'), // %1$s = plugin name(s).
                'notice_cannot_install' => _n_noop('Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.'), // %1$s = plugin name(s).
                'notice_can_activate_required' => _n_noop('The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.'), // %1$s = plugin name(s).
                'notice_can_activate_recommended' => _n_noop('The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.'), // %1$s = plugin name(s).
                'notice_cannot_activate' => _n_noop('Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.'), // %1$s = plugin name(s).
                'notice_ask_to_update' => _n_noop('The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.'), // %1$s = plugin name(s).
                'notice_cannot_update' => _n_noop('Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.'), // %1$s = plugin name(s).
                'install_link' => _n_noop('Begin installing plugin', 'Begin installing plugins'),
                'activate_link' => _n_noop('Begin activating plugin', 'Begin activating plugins'),
                'return' => __('Return to Required Plugins Installer', 'tgmpa'),
                'plugin_activated' => __('Plugin activated successfully.', 'tgmpa'),
                'complete' => __('All plugins installed and activated successfully. %s', 'tgmpa'), // %s = dashboard link.
                'nag_type' => 'updated' // Determines admin notice type - can only be 'updated', 'update-nag' or 'error'.
            )
        );

        tgmpa($plugins, $config);
    }

    public function addDefaultSettings() {
        $opt = get_site_option('theme_front_page_galery_category_id');
        if($opt===false){
            update_site_option('theme_front_page_galery_category_id', 0);
        }
        $opt = get_site_option('theme_team_members_galery_category_id');
        if($opt===false){
            update_site_option('theme_team_members_galery_category_id', 0);
        }
        $opt = get_site_option('theme_team_members_slide_pp_number');
        if($opt===false){
            update_site_option('theme_team_members_slide_pp_number', 4);
        }
    }

}

$angularJStheme = new angularjs_wp_theme();
$angularJStheme->init();


add_action('admin_menu', 'theme_custom_settings_update');
add_action('admin_menu', 'theme_custom_settings_single');

function theme_custom_settings_single() {
    add_submenu_page(
            'options-general.php', 'Theme custom settings', 'Theme settings', 'manage_options', 'theme-custom', 'theme_custom_settings_action'
    );
}

function theme_custom_settings_update() {

    if (isset($_POST['submit'])) {

        // verify authentication (nonce)
        if (!isset($_POST['theme_custom_nonce']))
            return;

        // verify authentication (nonce)
        if (!wp_verify_nonce($_POST['theme_custom_nonce'], 'theme_custom_nonce'))
            return;
        if (isset($_POST['theme_front_page_galery_category_id'])) {
            update_site_option('theme_front_page_galery_category_id', $_POST['theme_front_page_galery_category_id']);
        }

        if (isset($_POST['theme_team_members_galery_category_id'])) {
            update_site_option('theme_team_members_galery_category_id', $_POST['theme_team_members_galery_category_id']);
        }

        if (isset($_POST['theme_team_members_slide_pp_number'])) {
            update_site_option('theme_team_members_slide_pp_number', $_POST['theme_team_members_slide_pp_number']);
        }
    }
}
function theme_custom_settings_action() {
    ?>
    <div class="wrap">
        <h2>Custom Theme settings</h2>
        <form method="post">
            <p>
                <label>
                    Front page carousele media category Category
                    <input type="text" value="<?php echo get_site_option('theme_front_page_galery_category_id');?>" name="theme_front_page_galery_category_id" >
                    <br/>
                </label>
                <label>
                    Team members carousele media category Category
                    <input type="text" value="<?php echo get_site_option('theme_team_members_galery_category_id');?>" name="theme_team_members_galery_category_id" >
                    <br/>
                </label>
                <label>
                    Team members per slide number
                    <input type="text" value="<?php echo get_site_option('theme_team_members_slide_pp_number');?>" name="theme_team_members_slide_pp_number" >
                    <br/>
                </label>
            </p>
            <?php wp_nonce_field('theme_custom_nonce', 'theme_custom_nonce'); ?>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}
