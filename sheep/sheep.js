//功能模块化

(function() { //小羊动画

	//定义一个小样模型：工厂模式

	var obj = {
		frequency: 70, //协调频率
		stage: document.getElemntsByClassName('stage')[0],
		num: 0, //个数
		cot: 0, //left的变量
		speed: 7, //速度
	}

	function Sheep(data) {
		this.sheep = document.createElement('div');
		data.stage.appendChild(this.sheep);
		this.sheep.class = 'sheep';
		this.frequencyNum = Math.floor(Math.random() * data.frequency) + 30;
		this.sheepWidth = this.sheep.offsetWidth;
		this.cot = data.cot;
		this.speed = data.speed;
	}

	// new Sheep(obj);
	init();

	function init() {
		creatSheep();
	}

	function createSheep() {
		var sheep = new Sheep(obj);
		sheepRun(sheep);
	}

	function sheepRun() {

	}

}());