<template>
	<div class="container">
		
		<div class="col-md-6 offset-md-3">
			<div class="card-header">
				<p>Login</p>
			</div>
			<div class="card-body">
				
				<form @submit.prevent="submit">					

					<div class="form-group">
						<label>Email</label>
						<input type="email" v-model.trim="form.email" class="form-control" autofocus placeholder="Email">
					</div>

					<div class="form-group">
						<label>Password</label>
						<input type="password" v-model.trim="form.password" class="form-control" placeholder="Password" name="">
					</div>
					
					<div class="form-group">
						<input type="submit" value="Login" class="btn btn-primary" style="float: right;">
					</div>
				</form>
				
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					email: '',
					password: ''
				}
			}
		},
		methods: {
			async submit() {
				await this.$auth.loginWith("local", {
					data: this.form
				});

				this.$router.push('/')
			}
		}
	}
</script>