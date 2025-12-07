<template>
    <div class="quixnav">
        <div class="quixnav-scroll">
            <ul class="metismenu" id="menu">
                <li class="nav-label first">Main Menu</li>
                <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-single-04"></i><span class="nav-text">Dashboard</span></a>
                    <ul aria-expanded="false">
                        <li><router-link to="/">Dashboard 1</router-link></li>
                        <li><router-link to="/dashboard2">Dashboard 2</router-link></li>
                    </ul>
                </li>
                <li class="nav-label">Apps</li>
                <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-app-store"></i><span class="nav-text">Apps</span></a>
                    <ul aria-expanded="false">
                        <li><router-link to="/app-profile">Profile</router-link></li>
                        <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Email</a>
                            <ul aria-expanded="false">
                                <li><router-link to="/email-compose">Compose</router-link></li>
                                <li><router-link to="/email-inbox">Inbox</router-link></li>
                                <li><router-link to="/email-read">Read</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/app-calendar">Calendar</router-link></li>
                    </ul>
                </li>
                <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-chart-bar-33"></i><span class="nav-text">Charts</span></a>
                    <ul aria-expanded="false">
                        <li><router-link to="/chart-flot">Flot</router-link></li>
                        <li><router-link to="/chart-morris">Morris</router-link></li>
                        <li><router-link to="/chart-chartjs">Chartjs</router-link></li>
                        <li><router-link to="/chart-chartist">Chartist</router-link></li>
                        <li><router-link to="/chart-sparkline">Sparkline</router-link></li>
                        <li><router-link to="/chart-peity">Peity</router-link></li>
                    </ul>
                </li>
                <li class="nav-label">Components</li>
                <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-world-2"></i><span class="nav-text">Bootstrap</span></a>
                    <ul aria-expanded="false">
                        <li><router-link to="/ui-accordion">Accordion</router-link></li>
                        <li><router-link to="/ui-alert">Alert</router-link></li>
                        <li><router-link to="/ui-badge">Badge</router-link></li>
                        <li><router-link to="/ui-button">Button</router-link></li>
                        <li><router-link to="/ui-modal">Modal</router-link></li>
                        <li><router-link to="/ui-button-group">Button Group</router-link></li>
                        <li><router-link to="/ui-list-group">List Group</router-link></li>
                        <li><router-link to="/ui-media-object">Media Object</router-link></li>
                        <li><router-link to="/ui-card">Cards</router-link></li>
                        <li><router-link to="/ui-carousel">Carousel</router-link></li>
                        <li><router-link to="/ui-dropdown">Dropdown</router-link></li>
                        <li><router-link to="/ui-popover">Popover</router-link></li>
                        <li><router-link to="/ui-progressbar">Progressbar</router-link></li>
                        <li><router-link to="/ui-tab">Tab</router-link></li>
                        <li><router-link to="/ui-typography">Typography</router-link></li>
                        <li><router-link to="/ui-pagination">Pagination</router-link></li>
                        <li><router-link to="/ui-grid">Grid</router-link></li>
                    </ul>
                </li>
                <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-plug"></i><span class="nav-text">Plugins</span></a>
                    <ul aria-expanded="false">
                        <li><router-link to="/uc-select2">Select 2</router-link></li>
                        <li><router-link to="/uc-nestable">Nestedable</router-link></li>
                        <li><router-link to="/uc-noui-slider">Noui Slider</router-link></li>
                        <li><router-link to="/uc-sweetalert">Sweet Alert</router-link></li>
                        <li><router-link to="/uc-toastr">Toastr</router-link></li>
                        <li><router-link to="/map-jqvmap">Jqv Map</router-link></li>
                    </ul>
                </li>
                <li><router-link to="/widget-basic" aria-expanded="false"><i class="icon icon-globe-2"></i><span
                                class="nav-text">Widget</span></router-link></li>
                <li class="nav-label">Forms</li>
                <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-form"></i><span class="nav-text">Forms</span></a>
                    <ul aria-expanded="false">
                        <li><router-link to="/form-element">Form Elements</router-link></li>
                        <li><router-link to="/form-wizard">Wizard</router-link></li>
                        <li><router-link to="/form-editor-summernote">Summernote</router-link></li>
                        <li><router-link to="/form-pickers">Pickers</router-link></li>
                        <li><router-link to="/form-validation-jquery">Jquery Validate</router-link></li>
                    </ul>
                </li>
                <li class="nav-label">Table</li>
                <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-layout-25"></i><span class="nav-text">Table</span></a>
                    <ul aria-expanded="false">
                        <li><router-link to="/table-bootstrap-basic">Bootstrap</router-link></li>
                        <li><router-link to="/table-datatable-basic">Datatable</router-link></li>
                    </ul>
                </li>
                <li class="nav-label">Extra</li>
                <li><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i
                                class="icon icon-single-copy-06"></i><span class="nav-text">Pages</span></a>
                    <ul aria-expanded="false">
                        <li><router-link to="/page-register">Register</router-link></li>
                        <li><router-link to="/page-login">Login</router-link></li>
                        <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Error</a>
                            <ul aria-expanded="false">
                                <li><router-link to="/page-error-400">Error 400</router-link></li>
                                <li><router-link to="/page-error-403">Error 403</router-link></li>
                                <li><router-link to="/page-error-404">Error 404</router-link></li>
                                <li><router-link to="/page-error-500">Error 500</router-link></li>
                                <li><router-link to="/page-error-503">Error 503</router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/page-lock-screen">Lock Screen</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    </template>

<script>
export default { name: "Sidebar" }
</script>