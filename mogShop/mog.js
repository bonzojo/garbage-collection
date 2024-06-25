const mogShop = () => {
    const weaponsArray = ['Sword', 'Axe', 'Mace', 'Dagger', 'Pistol', 'Crowbar'];
    console.log(`Hi there Kupo! Buy a weapon and I will enchant it for you Kupo!`);
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            if (Math.random() < 0.2) {
                reject(`Come back another time Kupo. I'm busy!`);
            } else {
                let randomIndex = Math.floor(Math.random() * weaponsArray.length);
                let randomWeapon = weaponsArray[randomIndex];
                console.log(`The ${randomWeapon} is a great choice Kupo! I can enchant if you'd like?`);
                resolve(randomWeapon);
            }
        }, 1000)
    })
}

let enchantWeapon = (randomWeapon) => {
    console.log(`I will enchant your ${randomWeapon} for you now Kupo!`);
    let enchantType = ['of Frost', 'of Fire', 'of Earth', 'of Kupo'];
    let randomEnchant = enchantType[Math.floor(Math.random() * enchantType.length)];
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            if (Math.random() < 0.2) {
                let cursedWeapon = `Cursed ${randomWeapon}`;
                reject(`eh sorry Kupo, but the enchant went wrong! Here is your ${cursedWeapon}`)
            }
            let enchantedWeapon = `${randomWeapon} ${randomEnchant}`;
            console.log(`Your ${enchantedWeapon} is ready, Kupo!`);
            resolve(enchantedWeapon);    
        }, 1500)
    })
}

module.exports = {mogShop, enchantWeapon};