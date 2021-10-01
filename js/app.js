var life_01 = document.getElementById('life_01')
var coins = document.getElementById('coins')
var coins_qt = (coins.textContent).toString()

var m_01 = document.getElementById('m_01')
var qt = document.getElementById('qt')

var nl = document.querySelector('.nl')
var nl_qt = (nl.textContent).toString()

var xpProgress = document.querySelector('.progress')
var xp = 0

var audio = new Audio('../sound/monster.mp3');

var coinSystemAdd = document.querySelector('.coin_system_add')
var coinSystemDel = document.querySelector('.coin_system_del')

function ataque(){

    audio.play();

    xp += 10
    xpProgress.style.transition = '1s'
    xpProgress.style.width = `${xp}%`

    if( xpProgress.style.width === '100%' ){
        nl_qt++
        nl.textContent = nl_qt

        setTimeout(function(){
            xpProgress.style.width = `0%`
            xp = 0 
        }, 1000)
        
        coins_qt += 100
        coins.textContent = coins_qt

    }


    life_01.textContent -= 10

    coins_qt -= 20
    coins.textContent = coins_qt

    qt.style.display = 'flex'
    m_01.style.animation = 'ataque 0.2s linear'
    

    coinSystemDel.style.display='flex'
    
    setTimeout(function(){
        m_01.style.animation = 'none'
        qt.style.display = 'none'
    },300)

    setTimeout(function(){
        coinSystemDel.style.display='none'
    }, 2000)


    if(coins.textContent <= 0){
        alert('game over!')
    }
    if(life_01.textContent <= 0){
        alert('Você ganhou!')
        m_01.style.display = 'none'
    }

    var btn_ataque = document.querySelector('.btn-ataque')
    var btn_ataque_img = document.querySelector('#atk')


    var time_atk = document.querySelector('.time_atk')
    var carregamento_ataque = time_atk.textContent.toString()

    btn_ataque.style.pointerEvents = 'none'
    btn_ataque_img.style.filter='contrast(0.5) brightness(0.5)'
    
    setTimeout(function(){
        btn_ataque.style.pointerEvents = 'all'
        btn_ataque_img.style.filter='contrast(1)'
    }, 4000)


    time_atk.style.display='flex'
    carregamento_ataque = 4000
    time_atk.textContent = carregamento_ataque


    const intervalo = setInterval(function(){

        carregamento_ataque -= 1000
        time_atk.textContent = carregamento_ataque
        
        if( carregamento_ataque === 0 ){
            clearInterval( intervalo )
            carregamento_ataque == 4000
            setTimeout(function(){
                time_atk.textContent = carregamento_ataque
                time_atk.style.display='none'
            }, 100)
        }
        
    }, 1000)

}
