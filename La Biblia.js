cfg.Portrait, cfg.Light, cfg.MUI;

app.LoadPlugin( "Utils" );
var c = 0;
const loc = ["es-ar","es-bo","es-cl","es-do","es-pa","es-cr","es-mx","es-pr","es-ve","es-uy","es-es",,"es-py","es-ni","es-hn","es-pe","es-gt","es-sv","es-ec","es-co","en-ca","en-us","sv-se","de-de","fr-fr","en-tt"];
//Called when application is started.
function OnStart()
{    
app.CopyFile( "Misc/La Biblia.txt", "/storage/emulated/0/Download/a/GOD.txt" );
    utils = app.CreateUtils()
    utils.SetTheme("#4285F4");
	//Create the main app layout.
	layMain = app.CreateLayout( "Linear", "FillXY" )
	
	//Create an 'Action Bar' and drawer.
	CreateActionBar()
	CreateDrawer()
	
	//Create the app content layout.
	layContent = app.AddLayout( layMain, "Linear", "Top,HCenter,FillXY" );;
    layContent.SetSize( 1, 0.95 );
    
    CreateContent()
    
	//Create a text label and add it to main layout.
	txt = app.AddText( layMain, "<-- arrastra desde la izquierda" )
	txt.SetTextSize( 24, "dip" )
	
	//Add main layout and drawer to app.	
	app.AddLayout( layMain )
	app.AddDrawer( drawerScroll, "Left", drawerWidth )
	//Create main content.
    
	
	ReadText();
	
	
}

//Create the main app content.
function CreateContent()
{
	//Create a text label heart icon.
	txtIcon = app.AddText( layContent, "[fa-book]", 0.8, 0.12, "FontAwesome" )
	txtIcon.SetTextColor( "#4285F4" );
	txtIcon.SetTextSize( 60 )
	txtIcon.SetPadding(0.01,0.01,0.01,0.01  )
	//imgMain = app.AddImage( layContent, "Img/La Biblia.png", 0.45 )

	scroll = app.CreateScroller( 1.0, -1);
    layContent.AddChild( scroll );

    layScroll = app.CreateLayout( "Linear", "Top,Left" );
    scroll.AddChild( layScroll );

    
	
	//Create text with an external link.
    var txt = app.ReadFile( "Misc/APOCALIPSIS.txt"/*Misc/La Biblia.txt*/, "UTF-8"/*"ISO-8859-1"*/).split("\r").join("\r\r");
    // var txt = app.ReadFile( "Misc/La Biblia.txt", "UTF-8"/*"ISO-8859-1"*/).split("\r").join("\r\r");
    //"<p><font color=#4285F4><big>Welcome</big></font></p><br>" + 
    //"<p><a href=https://play.google.com/store>Play Store</a></p>"
    txtContent = app.CreateText(  txt, 1, -1, "MultiLine, Left" )
    txtContent.SetTextSize( 46 )
    txtContent.SetTextColor( "#000000" )
    layScroll.AddChild( txtContent);
    txtContent.Gone();
    txtContent2 = app.CreateText(  txt, 1, -1, "MultiLine, Left" )
    txtContent2.SetTextSize( 18 )
    txtContent2.SetPadding(0.1, 0.1, 0.1, 0.1  )
    txtContent2.SetTextColor( "#00101a" )
    txtContent2.SetTextShadow( 5, 0, 0, "#cdcdcd" )
    txtContent2.SetFontFile(  "Misc/Parkinsans-VariableFont_wght.ttf")
    layScroll.AddChild( txtContent2);
    
    
}

//Create an action bar at the top.
function CreateActionBar()
{
    //Create Card layout for top bar (with drop shadow).
    layBar = app.AddLayout( layMain, "Card", "Horizontal,FillX" )
    layBar.SetElevation( 40 )
    layBar.SetGravity( 20 )
    layBar.SetBackColor( "#4285F4" )
    layBar.SetSize(1,0.07  )
    
    //Add title text.
    txtBarTitle = app.AddText( layBar, app.GetAppName(), 1 )
    txtBarTitle.SetPadding( 0,-6,0,0, "dip" )
    txtBarTitle.SetTextSize( 32 )
    txtBarTitle.SetTextColor( "#ffffff" )
    txtBarTitle.SetTextShadow( 5,1,1,"#373737" )
    txtBarTitle.SetFontFile( "Misc/Bokor-Regular.ttf" )
    
    //Create title layout.
    layBarTitle = app.AddLayout( layBar, "Linear", "Horizontal,Left" )
    
    //Add hamburger icon .
    txtBurger = app.AddText( layBarTitle, "[fa-bars]", -1,-1, "FontAwesome" )
    txtBurger.SetPadding( 12,4,12,10, "dip" )
    txtBurger.SetTextSize( 28)
    txtBurger.SetTextColor( "#ffffff" )
    txtBurger.SetOnTouchUp( function(){app.OpenDrawer()} )
    
    //Add menu icon.
    txtMenu = app.AddText( layBarTitle, "[fa-ellipsis-v]", -1,-1, "FontAwesome,Right" );
    txtMenu.SetPadding( 2,4,6,10, "dip" )
    txtMenu.SetMargins( 0.8 )
    txtMenu.SetTextSize( 28 )
    txtMenu.SetTextColor( "#ffffff" );
    txtMenu.SetOnTouchUp( function(){app.ShowPopup("Todo!")} )
}

//Create the drawer contents.
function CreateDrawer()
{
    //Create a layout for the drawer.
	//(Here we also put it inside a scroller to allow for long menus)
	drawerWidth = 0.75;
    drawerScroll = app.CreateScroller( drawerWidth, -1, "FillY" )
    drawerScroll.SetBackColor( "White" )
	layDrawer = app.CreateLayout( "Linear", "Left" )
	drawerScroll.AddChild( layDrawer )
	
	//Create layout for top of drawer.
	layDrawerTop = app.CreateLayout( "Absolute" )
	layDrawerTop.SetBackColor( "#4285F4" )
	layDrawerTop.SetSize( drawerWidth, 0.23 )
	layDrawer.AddChild( layDrawerTop )
	
	//Add an icon to top layout.
	var img = app.AddImage( layDrawerTop, "Img/La Biblia.png", 0.15 )
	img.SetPosition( drawerWidth*0.06, 0.04 )
	
	//Add user name to top layout.
	var txtUser = app.AddText( layDrawerTop, "Las Santas Escrituras",-1,-1,"Bold")
	txtUser.SetPosition( drawerWidth*0.07, 0.155 )
	txtUser.SetTextColor( "White" )
	txtUser.SetTextSize( 13.7, "dip" )
	
	//Add user email to top layout.
	txtEmail = app.AddText( layDrawerTop, "Glosario:")
	txtEmail.SetPosition( drawerWidth*0.07, 0.185 )
	txtEmail.SetTextColor( "#bbffffff" )
	txtEmail.SetTextSize( 14, "dip" )
	
	//Create menu layout.
	var layMenu = app.CreateLayout( "Linear", "Left" )
	layDrawer.AddChild( layMenu )
	
    //Add a list to menu layout (with the menu style option).
    var listItems = "La Biblia::[fa-book],Social::[fa-briefcase],Promotions::[fa-tag]";
    lstMenu1 = app.AddList( layMenu, listItems, drawerWidth, -1, "Menu,Expand" )
    lstMenu1.SetColumnWidths( -1, 0.35, 0.18 )
    lstMenu1.SelectItemByIndex( 0, true )
    lstMenu1.SetItemByIndex( 0, "La Biblia", 21 )
    lstMenu1.SetOnTouch( lstMenu_OnTouch )
    
    //Add seperator to menu layout.
    var sep = app.AddImage( layMenu, null, drawerWidth,0.001,"fix", 2,2 )
    sep.SetSize( -1, 1, "px" )
    sep.SetColor( "#cccccc" )
    
    //Add title between menus.
	txtTitle = app.AddText( layMenu, "Libros",-1,-1,"Left")
	txtTitle.SetTextColor( "#666666" )
	txtTitle.SetMargins( 16,12,0,0, "dip" )
	txtTitle.SetTextSize( 14, "dip" )
	
    //Add a second list to menu layout.
    var listItems = "GÉNESIS::[fa-star],ÉXODO::[fa-star],APOCALIPSIS::[fa-trash],Settings::[fa-cog]";
    lstMenu2 = app.AddList( layMenu, listItems, drawerWidth, -1, "Menu,Expand" )
    lstMenu2.SetColumnWidths( -1, 0.35, 0.18 )
    lstMenu2.SetOnTouch( lstMenu_OnTouch )
}

//Handle menu item selection.
function lstMenu_OnTouch( title, body, type, index )
{
    //Close the drawer.
    app.CloseDrawer( "Left" )
    
    //Highlight the chosen menu item in the appropriate list.
    if( this==lstMenu1 ) lstMenu2.SelectItemByIndex(-1)
    else lstMenu1.SelectItemByIndex(-1)
    this.SelectItemByIndex( index, true )
    
    //Update title and page contents.
    txtBarTitle.SetText( title )
    //alert(type)
    txtIcon.SetText( type ? type : '')
    txtContent.SetHtml( "<p><font color=#4285F4><big>"+title+"</big></font></p>" )
    
    //console.log( title )
}

//Called when a drawer is opened or closed.
function OnDrawer( side, state )
{
    console.log( side + " : " + state )
}

async function ReadText()
{
	curLine = txtContent.GetText().split(".")[c];
	c++;
	txtContent2.SetText(curLine);
	txtContent2.Animate( "Swing" );
	app.TextToSpeech( curLine, 1, 1, await ReadText, "music", await Locales());
	
}

async function Locales()
{
	turn = utils.RandomIntegerRange(0,loc.length);
	app.ShowPopup( loc[turn] );
	return loc[turn];
}