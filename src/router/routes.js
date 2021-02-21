import VueRouter from 'vue-router'
import jeoparty from '@/views/jeoparty/jeoparty'
import setup from '@/views/jeoparty/setup'
import loading from '@/views/jeoparty/loading'

export default {
	create_router() {
		const router = new VueRouter({
			routes: [
				{
					path: '/',
					name: 'index',
					component: setup
				},
				{
					path: '/loading/:user',
					name: 'loading',
					component: loading,
					props: true
				},
				{
					path: '/jeopary',
					name: 'jeoparty',
					component: jeoparty
				}
			]
		})
		return router
	}
}
