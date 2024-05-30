// Scripts for Basic Sign Up Button
document.getElementById('basic-btn').addEventListener('click', function() {
    this.disabled = true;
    document.getElementById('basic-btn').style.backgroundColor = '#FFF';
    document.getElementById('basic-btn').style.color = '#281E29';

    let Rooms = document.getElementById('basic-plan-room-no').innerText;
    Rooms = parseInt(Rooms);
    console.log(Rooms)

    let newDiv = document.createElement('div');
    newDiv.id = 'basic-greeting';
    newDiv.innerHTML = 
    `Thank you for choosing <span id="basic-room-no">${Rooms}</span> room.`
    console.log(newDiv)
    document.getElementById('basic-plan-container').appendChild(newDiv);
});

// Scripts for Basic Minus Button
document.getElementById('basic-minus').addEventListener('click',function(){
    let Price = document.getElementById('basic-plan').innerText;
    let Rooms = document.getElementById('basic-plan-room-no').innerText;
    Price = parseInt(Price);
    Rooms = parseInt(Rooms);

    if(Price>199)
        {
            Price-=199;
            Rooms-=1;
        }
        
    document.getElementById('basic-plan').innerText = Price;
    document.getElementById('basic-plan-room-no').innerText = Rooms;
})

// Scripts for Basic Plus Button
document.getElementById('basic-plus').addEventListener('click',function(){
    let Price = document.getElementById('basic-plan').innerText;
    let Rooms = document.getElementById('basic-plan-room-no').innerText;
    Price = parseInt(Price);
    Rooms = parseInt(Rooms);
    Price+=199;
    Rooms+=1;
    document.getElementById('basic-plan').innerText = Price;
    document.getElementById('basic-plan-room-no').innerText = Rooms;
})

// Scripts for Pro Minus Button
document.getElementById('pro-minus').addEventListener('click',function(){
    let Price = document.getElementById('pro-plan').innerText;
    let Rooms = document.getElementById('pro-plan-room-no').innerText;
    Price = parseInt(Price);
    Rooms = parseInt(Rooms);

    if(Price>249)
        {
            Price-=249;
            Rooms-=1;
        }
        
    document.getElementById('pro-plan').innerText = Price;
    document.getElementById('pro-plan-room-no').innerText = Rooms;
})

// Scripts for Pro Plus Button
document.getElementById('pro-plus').addEventListener('click',function(){
    let Price = document.getElementById('pro-plan').innerText;
    let Rooms = document.getElementById('pro-plan-room-no').innerText;
    Price = parseInt(Price);
    Rooms = parseInt(Rooms);
    Price+=249;
    Rooms+=1;
    document.getElementById('pro-plan').innerText = Price;
    document.getElementById('pro-plan-room-no').innerText = Rooms;
})

// Scripts for Pro Sign Up Button

document.getElementById('pro-btn').addEventListener('click',function(){
    this.disabled = true;
    document.getElementById('pro-btn').style.backgroundColor = '#FFF';
    document.getElementById('pro-btn').style.color = '#281E29';
    
    let Rooms = document.getElementById('pro-plan-room-no').innerText;
    Rooms = parseInt(Rooms);
    console.log(Rooms)

    let newDiv = document.createElement('div');
    newDiv.id = 'pro-greeting';
    newDiv.innerHTML = 
    `Thank you for choosing <span id="pro-room-no">${Rooms}</span> room.`
    console.log(newDiv)
    document.getElementById('pro-plan-container').appendChild(newDiv);
})