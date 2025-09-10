function App() {
    return(
    <>
        <div className= 'top-bar'>
            <button className= 'top-bar-button left-end'>Home</button>
            <button className= 'top-bar-button'>Blog</button>
            <button className= 'top-bar-button'>Store</button>
        </div>
        <h1 className= 'basic-header1'>My Favorite Fruits</h1>
        <div id= 'website-content'>
            <p className= 'basic-paragraph'>Hello! This is a test on using the css clamp function to better display content on mobile devices. This is in hopes that I would be able to
                                            better develop websites with mobile users in mind. If you're on your phone right now, you should be able to notice a difference in the
                                            website is layed out already. The design, although basic, is much more compact and there is less dead space between the content and the end
                                            of the page.</p>
            <p className= 'basic-paragraph'></p>

            <h2 className= 'basic-header2'>#5 Lemon</h2>
            <p className= 'basic-paragraph'>The lemon looks so posh and looks really full of himself which is exactly what I think a lemon WOULD act like. The Lemon just looks so full of
                                            himself, like he THINKS he's the best fruit there is, when he's only the 5th best fruit there is. Poor guy...</p>
            <img className = 'basic-image' src = './lemon.gif'/>

            <h2 className= 'basic-header2'>#4 Orange</h2>
            <p className= 'basic-paragraph'>THE ORANGE LOOKS REALLY CUTE. Orange looks like a little baby and innocent little guy that might have a dark secret too. You might be able to
                                            see it, but there is an orange slice right in front of him, meaning that he either killed someone else, or someone murdered another orange in front
                                            of him.</p>
            <img className = 'basic-image' src = './orange.gif'/>
            
            <h2 className= 'basic-header2'>#3 Evil Raspberry</h2>
            <p className= 'basic-paragraph'>This next one is the newest one in the bunch as of making this list, and it's supposed to be a twist on the raspberries she drew previously
                                            I really like the idea of these and think that they are pretty funny and also have so much character to them.</p>
            <img className = 'basic-image' src = './evil-raspberry.gif'/>
            
            <h2 className= 'basic-header2'>#2 Pineapple</h2>
            <p className= 'basic-paragraph'>Pinapple looks like the type of guy you would approach and ask a question to if you couldn't find an item in the grocery store. Pinapple looks like
                                            the type of guy who you would go to when you have a problem and you want to vent to someone on how you feel. Pineapple is the type of person that would
                                            rank 2nd in a top fruit list.
            </p>
            <img className = 'basic-image' src = './pineapple.gif'/>

            <h2 className= 'basic-header2'>#1 Pear</h2>
            <p className= 'basic-paragraph'>Bro obviously this one was gonna be 1st in this list. The fruits with the stronger personalities are the ones that stuck out the most out of all of the
                                            fruits and Pear is a perfect example of why. When you look at Pear you can tell exactly how she speaks and interacts with other fruits. Pear is peak.
            </p>
            <img className = 'basic-image' src = './pear.gif'/>
            
        </div>
        </>
    )
}

export default App
