
	var n,op;
	var sub;
	var vall1,vall2;

	function check(n)
	{
		if(!(isNaN(n)))
			return true;
		else
			false;
	}

	function cal_sum(a,b)
	{
		if(op=="+")
			return parseInt(a)+ parseInt(b) ;
		else if(op=="-")
			return a-b;
		else if(op=="*")
			return a*b;
		else if(op=="/")
			return a/b;
		else
			{

				alert("choose an operator first");
				return "";
			}
	}


	//document.getElementByid("fval").value=2;


	var res=0;
	function result()
	{

		vall1 = document.getElementById('fval').value;
		vall2 = document.getElementById('sval').value;
		op = document.getElementById('operator').value;
		if(check(vall1) && check(vall2))
		{
			//console.log(res);
			res = cal_sum(vall1,vall2);
			//console.log(res);
			document.getElementById('sum').value=res;
		}
		else
			alert("value must be a number");

	}

function hide()
{

	document.getElementById('hide').style.display="none";
}
function show()
{

	document.getElementById('hide').style.display="";
}
