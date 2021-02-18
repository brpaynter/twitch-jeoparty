import VueRouter from 'vue-router'
import jeoparty from '@/views/jeoparty/jeoparty'

export default {
	create_router() {
		const router = new VueRouter({
			routes: [
				{
					path: '/',
					component: jeoparty
				}
			]
		})
		return router
	}
}
