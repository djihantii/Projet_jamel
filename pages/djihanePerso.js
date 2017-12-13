$(document).ready(function()
	{
		
		$('.ShowBalanceSheet').hide();
		$('.ShowGraph').hide();
		$('.ShowAgents').show();



		//$('.Validate').on('click' , function(){$(this).show();})
		$('.balanceSheet').on('click' , function()
			{
				$('.ShowBalanceSheet').show();
				$('.ShowAgents').hide();
				$('.ShowGraph').hide();
			});
		$('.AgentEconomic').on('click' , function()
			{
				$('.ShowAgents').show();
				$('.ShowBalanceSheet').hide();
				$('.ShowGraph').hide();
			});
		$('.Graphs').on('click' , function()
			{
				$('.ShowGraph').show();
				$('.ShowAgents').hide();
				$('.ShowBalanceSheet').hide();
			});
	});