$.fx.speeds.slow = 1500; // 'slow' now means 1.5 seconds
$.fx.speeds.xslow = 3000; // 'xslow' means 3 seconds
$.fx.speeds.xfast = 100; // 'xfast' means 0.1 seconds

// set styles with jquery to overwrite jquery mobile
$('#username').parent('div').removeAttr('class');
$('#password').parent('div').removeAttr('class');
$('#username').parent('div').css('width', '50%');
$('#password').parent('div').css('width', '50%');
$('#username').parent('div').css('line-height', '1px');
$('#username').css('line-height', '10px');
$('#password').parent('div').css('height', '10px');

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    StatusBar.hide();
    loadLogo();
}

function loadLogo() {
	$("#load-img").hide();
	setTimeout(function(){ 
    	$("#load-img").fadeIn('slow');
    	setTimeout(function(){ 
    		$('#log').click();
    	}, 2500);
    }, 1000);
}

function addComment() {
	var comment = $('#comment').val();
	window.localStorage.setItem("comments",comment);
}

function checkUser() {
	var user = $('#username').val();
	if(user != '') {
		saveUser(user);
	} else {
		alert("Enter Username");
	}
}

function saveUser(user) {
	window.localStorage.setItem("username", user);
	loadPage('#home');
	alert("Welcome, " + user);
}

function show(n) {
    switch(n) {
        case 1:
            var html = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
            break;
        case 2:
            var html = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim leo, ornare id gravida ut, faucibus sed orci. Duis velit tellus, ullamcorper ut nibh in, scelerisque scelerisque arcu. Donec feugiat et turpis sit amet placerat. Fusce ullamcorper nunc mauris, vel feugiat est dignissim et. Fusce sed ultricies ipsum. Nunc vestibulum libero eget enim posuere laoreet. Integer eu enim risus. Morbi at diam dolor. Cras cursus ac tortor sit amet cursus. Fusce ornare libero nec enim posuere volutpat. Phasellus tincidunt, dolor sed pharetra interdum, massa lectus blandit erat, nec ornare urna risus non erat. Nam vel purus at risus consectetur accumsan.';
            break;
        case 3:
            var html = 'Duis molestie ipsum eu lobortis cursus. Praesent a nulla purus. Integer tincidunt fringilla purus, quis pulvinar nisl pellentesque id. Curabitur velit massa, rutrum eget lobortis eget, volutpat sit amet arcu. Duis in ipsum a lectus consequat tincidunt. Integer pulvinar, est a scelerisque laoreet, erat nulla tincidunt nisi, a fermentum nunc neque ut mi. Sed iaculis quis metus id rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ornare lacinia ligula imperdiet scelerisque. Sed a purus id augue pulvinar pulvinar. Phasellus at nulla euismod eros tristique suscipit.';
            break;
        case 4:
            var html = 'Nam gravida ac turpis sit amet dictum. Etiam nec velit a felis tempus vulputate. Praesent vel ipsum a ante aliquam porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus et est ut nibh finibus tempor vitae sit amet massa. Morbi vitae orci in massa accumsan viverra. Praesent a hendrerit felis, sit amet tincidunt lacus. Mauris feugiat scelerisque ultrices. Nulla venenatis facilisis urna eu imperdiet.';   
            break; 
        default:
        	var html = '';
        	break;                                            
    }
    
    $('.display').html(html);
    $('#display').removeClass('hide');
}

function getUserName() {
	return window.localStorage.getItem("username");
}

function loadPage(page) {
	$.mobile.changePage(page);
}
