<?php
use helpers\Svg;
?>
<div class="menu-mobile-main-options">
    <ul class="menu-items">
        <li>
            <a class="text-link arrow-1" href="#" data-item-details data-submenu="who-we-are">
                Who we are
                <?= file_get_contents("assets/images/arrows/btn-arrow-red.svg"); ?>
            </a>
        </li>
        <li>
            <a class="text-link arrow-1" href="#" data-item-details data-submenu="who-we-do">
                What we do
                <?= file_get_contents("assets/images/arrows/btn-arrow-red.svg"); ?>
            </a>
        </li>
        <li>
            <a class="text-link arrow-1" href="#" data-item-details data-submenu="our-impact">
                Our impact
                <?= file_get_contents("assets/images/arrows/btn-arrow-red.svg"); ?>
            </a>
        </li>
        <li>
            <a class="text-link arrow-1" data-item-details data-submenu="get-involved" href="#">
                Get involved
                <?= file_get_contents("assets/images/arrows/btn-arrow-red.svg"); ?>
            </a>
        </li>
    </ul>
    <ul class="menu-items-languages uppercase">
        <li>
            <a class="flex-container align-middle nav-item" href="#" data-item-details data-submenu="languages">
                <?php Svg::render('icon-languages') ?>
                English
            </a>
        </li>
        <li>
            <a class="flex-container align-middle nav-item" class="flex-container align-middle" href="#" data-item-details data-submenu="modal-search-offices" data-modal-open data-modal="modal-search-offices">
                <?php Svg::render('icon-www') ?>
                Locations
            </a>
        </li>
    </ul>
</div>