<?php

class ng2_enqueue {

    /**
     * @var instance
     *
     */
    private static $instance;

    /**
     * Returns the instance of this class.
     *
     * @access  public
     * @return  ng2_theme
     *
     */
    public static function instance() {
        if (!isset(self::$instance)) {
            $class_name = __CLASS__;
            self::$instance = new $class_name;
        }

        return self::$instance;
    }

    /**
     * ng2_theme constructor.
     *
     */
    function __construct() {

        add_action('wp_enqueue_scripts', array($this, 'ng2_scripts'));
    }

    /**
     * Enqueue Scripts
     *
     */
    function ng2_scripts() {
        wp_enqueue_script('inline', get_template_directory_uri() . '/dist/inline.bundle.js', array('jquery'), null, true);
        wp_enqueue_script('scripts', get_template_directory_uri() . '/dist/scripts.bundle.js', array('inline'), null, true);
        wp_enqueue_script('styles', get_template_directory_uri() . '/dist/styles.bundle.js', array('scripts'), null, true);
        wp_enqueue_script('vendor', get_template_directory_uri() . '/dist/vendor.bundle.js', array('styles'), null, true);
        wp_enqueue_script('main', get_template_directory_uri() . '/dist/main.bundle.js', array('vendor'), null, true);
        self::wpInfoScrpt();
        self::calendarInfoScrpt();

        wp_enqueue_style('ng-style', get_template_directory_uri() . '/dist/assets/css/style.css', array(), 'all');
    }

    public static function wpInfoScrpt() {
        $local_object = array(
            'apiDataUrl' => rest_get_url_prefix() . '/wp/v2/',
            'apiMenusUrl' => rest_get_url_prefix() . "/wp-api-menus/v2/",
            'templateDirectory' => get_template_directory_uri() . '/',
            'nonce' => wp_create_nonce('wp_rest'),
            'isAdmin' => current_user_can('administrator'),
            'carouselId' => 10,
            'teamId' => 11, //id of team members images category
            'mainMenu' => angularjs_wp_theme::MENU_STRING,
            'teamPpCarousel' => 4, // elements in one carousel slide
        );

        wp_localize_script('inline', 'wpInfo', $local_object);
        
    }

    public static function calendarInfoScrpt() {
        $local_object = [
            [
                "calendarUrl"=>"https://www.googleapis.com/calendar/v3/calendars/roche.com_l4jj87q7fklrbvkii3v6n8gotc%40group.calendar.google.com/events?key=AIzaSyArQXuswcbAz7NkVt0hiRWMBpkQM-_lKRo&singleEvents=true",
                "calendarColor"=>"orange",
                "calendarName"=>"internal",
            ],
            [
                "calendarUrl"=>"https://www.googleapis.com/calendar/v3/calendars/roche.com_3ub091a415lgm5t9so9de7gsok%40group.calendar.google.com/events?key=AIzaSyArQXuswcbAz7NkVt0hiRWMBpkQM-_lKRo&singleEvents=true",
                "calendarColor"=>"blue",
                "calendarName"=>"external",
            ]
        ];

        wp_localize_script('inline', 'calendarInfo', $local_object);
    }

}

?>
