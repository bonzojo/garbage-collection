const enemyHP = 100
const objectOfMyAffection = {
    name: 'Pikachu',
    color: ['Yellow', 'Black', 'Red'],
    likes: 'Ketchup',
    dislikes: 'Getting on a bus',
    strength: 4,
    age: 12,
    hp: 100,
    emote(){
        console.log('Pika-chu!')
    },
    strengthBoost() {
        this.strength += 6;
        console.log(this.strength);
    },
    attack() {
        enemyHP -10
    }
};
objectOfMyAffection.emote();
objectOfMyAffection.strengthBoost();
objectOfMyAffection.strengthBoost();