# Magento2-DisableMoblieMiniCart

##Description

Redirects clients on mobile to /checkout/cart page rather than showing the mini cart menu.

##Install

```bash
composer config repositories.magento2-disablemoblieminicart git https://github.com/joeyoung658/Magento2-DisableMoblieMiniCart.git
composer require ozark/magento2-disablemoblieminicart
php bin/magento module:enable Ozark/Magento2-DisableMoblieMiniCart
php bin/magento setup:upgrade
php bin/magento setup:di:compile 
php bin/magento setup:static-content:deploy en_GB en_US -f 
php bin/magento cache:flush
```

Credit - https://magento.stackexchange.com/users/519/renon-stewart
