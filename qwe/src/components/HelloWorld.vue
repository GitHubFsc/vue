<template>
	<div class="hello">
		<span>123</span>
		<h1 v-show="name">{{name}}</h1>
		<h1 v-show="age">{{age}}</h1>
		<h1 v-if="sex">{{sex}}</h1>
		<div>
			<span>名字</span>
			<input type="text" v-model="name" />
			<span>{{name}}</span>
		</div>
		<div>
			<span>年龄</span>
			<input type="text" v-model="age" />
			<span>{{age}}</span>
		</div>
		<div>
			<span>性别</span>
			<input type="text" v-model="sex" />
			<span>{{sex}}</span>
		</div>
		<button @click="greet">Greet</button>
		<ul>
			<li  v-for="arr in object">{{arr.name}} {{arr.age}} {{arr.sex}}</li>
			<li><img :src="img" /></li>
			<li><a v-bind:href="url">点我</a></li>
		</ul>
	</div>

</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				name: null,
				age: null,
				sex: null,
				url:'http://fsongchang.top/',
				img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1558062266&di=269c6f181de7b7d14870a148d54c19aa&src=http://c11.eoemarket.com/cms/outsideImg/2017/08/31/59a7bf5fe8399.jpg',
				object: [{
						name: 'cby',
						age: 16,
						sex: "男"
					},
					{
						name: 'cby',
						age: 17,
						sex: "女"
					},
					{
						name: 'cby',
						age: 18,
						sex: "null"
					}]
				}
			},
			methods: {
				greet(event) {
					// `this` 在方法里指当前 Vue 实例
					alert('Hello ' + this.name + '!')
					// `event` 是原生 DOM 事件
					if(event) {
						alert(event.target.tagName)
					}
				}
			}

		}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
	.hello{
		span{
			border: 1px solid red;
		}
	}
</style>