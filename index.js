const express = require('express');
const app = express();
const jsmediatags = require("jsmediatags");
const request = require('request');
const youTubeParser = require('youtube-parser');

app.set('views', './views');
app.set('view engine', 'pug');

var static=[
	{
		tautan:'https://www.youtube.com/watch?v=i0p1bmr0EmE',
	},

	{
		tautan:'https://www.youtube.com/watch?v=V2hlQkVJZhE',
	},

	{
		tautan:'https://www.youtube.com/watch?v=rRzxEiBLQCA',
	},

	{
		tautan:'https://www.youtube.com/watch?v=0rtV5esQT6I',
	},

	{
		tautan:'https://www.youtube.com/watch?v=VQtonf1fv_s',
	},

	{
		tautan:'https://www.youtube.com/watch?v=8A2t_tAjMz8',
	},

	{
		tautan:'https://www.youtube.com/watch?v=ePpPVE-GGJw',
	},

	{
		tautan:'https://www.youtube.com/watch?v=zi_6oaQyckM',
	},

	{
		tautan:'https://www.youtube.com/watch?v=c7rCyll5AeY',
	},

	{
		tautan:'https://www.youtube.com/watch?v=fBZB73b4PtM',
	},

	{
    tautan:'https://www.youtube.com/watch?v=Rlx0-7gxtk8',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=myIAH_Z7VU8',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=_84yJ4wZOBI',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=Gg809EFEPhw',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=t8x9-0fJgvE',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=fK7-Uie6N-E',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=bL7hstW5NuU',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=u4Ov6aEwKzE',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=IKF4XCE4RYs',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=nnkUgSaXSPI',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=8HUzP-iTCQQ',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=nSGqXl-vyuo',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=PFed9RaUIbo',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=CM-tFiyaz6U',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=jZldgEtebwY',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=yz8VnQllP1w',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=t35H2BVq490',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=7w-kCuFklQ8',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=DYe1SI10TlU',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=r1CMjQ0QJ1E',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=wQ_POfToaVY',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=sErJjrLswEw',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=LDTnDCjbTQ0',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=i1MDXaYQ2Vg',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=J8fnZ9PojdA',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=davOz6Lt3Dc',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=-j6XPEUKzn0',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=Yjyn6Ily6hM',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=6MiMAnJDcJk',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=2SKdq0-X0yQ',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=ZxPD0yJ_7pE',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=FOBO_E7sCxU',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=SxqgmfykBfE',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=HuoOEry-Yc4',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=0kWidNV5s3w',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=n7NEzFxx9bc',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=vS53e3wQcww',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=BUFKWZwkqIc',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=v17JgDb7yfs',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=l3kHE499wUo',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=DdLYSziSXII',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=K4USslPHC0I',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=K0InQMzuYTc',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=fG74Pwrehe4',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=sbm39ycHyuM',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=EYWD9IlZ4N8',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=hGC2TvN1VQQ',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=ampwBDa8gjA',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=gySq3p0qgug',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=asn1MSzjlgw',
    },
    

    {
    tautan:'https://www.youtube.com/watch?v=sSeoLKeGRkI',
    },

];

len=static.length;


app.get('/',function(req,res){
	var randint=Math.floor(Math.random()*len+1);
	var string=randint.toString();
	var string=static[string].tautan;
	var ytid=/watch\?v=(.*)/.exec(string);
	request('https://api.youtubemultidownloader.com/video?id='+ytid[1], function (error, response, body) {
	  var json=JSON.parse(body)
	  var judul=json.title;
	  var tautan=json.result['249'];
	  res.render('index',{judul:judul,tautan:tautan});
	});
	
});

app.listen('3000',function(){
	console.log('Started Server Port 3000');
});