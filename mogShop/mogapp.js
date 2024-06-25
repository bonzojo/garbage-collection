const {mogShop, enchantWeapon} = require('./mog.js');

async function shopKupo() {
    try {
        let weapon = await mogShop();
        try {
            let enchantedWeapon = await enchantWeapon(weapon);
            console.log(`Success Kupo! Here is your ${enchantedWeapon}`)
        } catch (enchantError) {
            console.log(enchantError);
        }
    } catch (shopError) {
        console.log(shopError);
    }
}
shopKupo();
