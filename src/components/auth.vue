<script>
	import axios from 'axios'

	var auth = {
		data() {
			return {
				showLoader : false,
				user_id : null,
			}
		},
		created() {
		},
		methods: {
      showLoading() {
      	this.showLoader = true;
      },
      hideLoading() {
      	setTimeout(()=>{
				  this.showLoader = false;
				},1000);
      },
      login( data ){
      	this.$router.push( { name: 'Clinic' } );
      }
    }
	}

	export default auth;
</script>
<style lang="scss" scoped>
	@import "./src/assets/css/auth.scss";
</style>