$(document).ready(function () {
    var chosen;
    var start = false;
    var enemy;
    enemyFound = false;
    var didWin = 3;
    var fighter = {
        goku: {
            hp: 900,
            ap: 3,
            cp: 82,
            image: '<img class="thumb" data-character="goku" src=./assets/images/goku.png>',
            name: 'Son Goku'
        },
        vegeta: {
            hp: 900,
            ap: 2,
            cp: 90,
            image: '<img class="thumb" data-character="vegeta" src=./assets/images/vegeta.jpg>',
            name: 'Vegeta'
        },
        cell: {
            hp: 1000,
            ap: 3,
            cp: 100,
            image: '<img class="thumb" data-character="cell" src=./assets/images/cell.jpg>',
            name: 'Cell'
        },
        trunks: {
            hp: 990,
            ap: 3,
            cp: 75,
            image: '<img class="thumb" data-character="trunks" src=./assets/images/Trunks.jpg_c200>',
            name: 'Trunks'
        }

    }


    $(".characters").append(fighter.goku.image);
    $(".characters").append(fighter.vegeta.image);
    $(".characters").append(fighter.cell.image);
    $(".characters").append(fighter.trunks.image);

    $('img').on('click', function () {
        if (start == false) {

            var char = $(this).attr('data-character');
            chosen = fighter[char];
            console.log(chosen.name)


            if (chosen.name == 'Son Goku') {
                $('#gokuSound').trigger('play');

                console.log('working');
            }
            else if (chosen.name == 'Vegeta') {
                $('#vegetaSound').trigger('play');
                // $('#vegetaSound').trigger('play');
            }
            else if (chosen.name == 'Cell') {
                $('#cellSound').trigger('play');
            }
            else {
                $('#trunksSound').trigger('play');
            }



            $(".yourChar").append(this);
            $(".badGuys").append($('.characters'));

            $(this).attr('data-character', 'chosen');

            start = true;

        }

        else if (start == true && $(this).attr('data-character') != 'chosen' && enemyFound == false) {
            var evilChar = $(this).attr('data-character');
            enemy = fighter[evilChar];
            console.log(enemy);
            $(".defender").append(this);
            enemyFound = true;
            $('#battleStats').empty();
        }
    })
    $('#attack').on('click', function () {

        if (chosen != null && enemy != null) {
            // console.log('works')
            battle();

        }
        else if (chosen != null && enemy == null) {
            alert('Chose Opponent');
        }


    })
    function battle() {
        enemy.hp -= chosen.ap;
        chosen.hp -= enemy.cp;
        chosen.ap = chosen.ap * 2;
        $('#battleStats').html('<div> Your current HP: ' + chosen.hp + '</div><div> Enemy HP: ' + enemy.hp + '</div>');


        if (chosen.hp <= 0) {
            alert('YOU LOSE');

        }
        else if (enemy.hp <= 0) {
            $('.defender').empty();
            $('#battleStats').html('<div> You defeated ' + enemy.name + '!</div>');
            enemyFound = false;
            didWin--;
            // console.log(didWin);
            if (didWin == 0) {
                alert('YOU WIN');
            }

        }
    }


})
