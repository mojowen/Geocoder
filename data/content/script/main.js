var addresses = [ ], // Addresses you want matched
	fixed = [ ], // Where they'll get put eventually
	g = new google.maps.Geocoder;

function newAddress(address,callback,donecallback) { 
	var theaddress = address || addresses.shift()
	if( theaddress == undefined && donecallback != undefined ) donecallback();
	setTimeout( function() { 
		g.geocode( { address: theaddress }, function(response) { 
			try {  
				if( response.length > 0 ) {
					var latlng = response[0].geometry.location.toString()
					latlng = latlng.slice(1,latlng.length-1)
					fixed.push( theaddress+"\t"+ latlng);
					callback(theaddress+"\t"+ latlng );
					console.log( addresses.length )
					newAddress(false, callback, donecallback);
				} else newAddress( theaddress, callback, donecallback );
			} catch(e) { 
				newAddress(false, callback, donecallback);
			}
		});
	}, 1500);
}
$(document).on('click','button',function() {
	addresses = $('textarea#addresses').val().split(/\n/);
	if( addresses.length == 1 && addresses[0] == '' )  { $('.progress').text('Ummm nothing there, sport'); return false }

	$('table').html('');
	$('.progress').text('Processed '+fixed.length+' out of '+(addresses.length+fixed.length))
	newAddress( false,
		function(row) { 
			$('.progress').text('Processed '+fixed.length+' out of '+(addresses.length+fixed.length) )
			var data = row.split(/\t/),
				$table = $('table')
			
			$table.append(
				'<tr><td>'+
				[
				data[0],
				data[1]
				].join('</td><td>')
				+'</td></tr>'
			);
			$('body').css('background-image','URL("http://maps.googleapis.com/maps/api/staticmap?sensor=true&center='+data[1]+'&zoom=10&size=800x800&maptype=terrain")')
			$('.right textarea').text( fixed.join("\n") ).css('height',$table.height()+'px').css('width',$table.width()+'px')
		}, 
		function() { 
			$('.progress').text('Completed '+fixed.length+' out of '+(addresses.length+fixed.length) )
			$('.right em').text('Results - click for copyable result')
		} 
	);
})
.on('hover','table tr',function() {
	var latlng = $('td:last',this).text();
	$('body').css('background-image','URL("http://maps.googleapis.com/maps/api/staticmap?sensor=true&center='+latlng+'&zoom=14&size=800x800&maptype=terrain")')
})
.on('click','.right',function() { $('table').hide(); $('#results').show().select(); })
.on('mouseout','#results',function() { $(this).hide(); $('table').show(); })
