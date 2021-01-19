<?php
use helpers\Svg;
use helpers\View;
?>

<section id="modal-search-offices" class="menu-modal modal-search-offices hide">
    <div class="grid-container fluid modal-content height-full">
        <div class="grid-x modal-body">
            <div class="cell large-auto  cell-search">
                <a class="hide-for-large btn-back" href="#" data-action-back data-btn-close>
                    <div class="arrow-back">
                        <?php Svg::render('arrow-back-bigger', true, 'back', 'assets/images/arrows/')?>
                    </div>
                    Back
                </a>
                <div class="header-modal">
                    <p class="tag uppercase show-for-large">current selection</p>
                    <h3 class="heading h3 location-undp show-for-large"><span class="uppercase">undp</span> global</h3>

                    <h2 class="heading h2 title">Find Our Offices Around the World.</h2>
                    <p class="big-copy description">The UNDP works in 170 countries around the world. Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Duis auctor, ante sed auctor faucibus, diam ante pellentesque turpis, sit amet dictum felis felis bibendum nisl. </p>
                    <p class="tag uppercase hide-for-large tag-current-section">current selection</p>
                    <h3 class="heading h3 title hide-for-large title-undp"><span class="uppercase">undp</span> Global</h3>
                    <a class="text-link arrow-3 show-for-large" href="#">
                        Go to GLOBAL SITE
                        <span>
                            <?php Svg::render('btn-arrow-external', false, 'External link', 'assets/images/arrows/')?>
                        </span>
                    </a>
                </div>
            </div>
            <div class="cell large-auto cell-list-offices">
                <div>
                    <div class="flex-container inputs">
                        <div class="flex-container search-input-group">
                            <label class="show-for-sr" for="search-offices">Search Offices</label>
                            <button type="button" class="flex-container align-middle btn-search"
                                    aria-label="Submit search">
                                <?php Svg::render('icon-search-modal-locations', true, 'Search Offices') ?>
                                <span class="show-for-sr">Submit search</span>
                            </button>
                            <input class="big-copy input-search" type="text" name="search-offices" id="search-offices"
                                   placeholder="Search offices" data-input-search>
                        </div>
                        <?php View::render('layout/navigation/modals/locations/multi-selects') ?>
                    </div>
                </div>
                <div class="flex-container align-middle active-filters" data-container-filters></div>

                <div class="countries" tabindex="-1"></div>
                <div class="flex-container align-center hide-for-large filter-options uppercase">
                    <button class="btn full btn-filters" tabindex="-1" data-open-filters data-modal-filter="modal-search-offices-filters">
                        Filter
                        <span class="flex-container align-middle align-center current-filters hide counter"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>