class RegistrationsController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmatiion, :timezone)
  end

  def account_update_params
    params.require(:user).permit(:name, :email, :password, :password_confirmatiion, :timezone)
  end

   def after_inactive_sign_up_path_for(resource)
    new_user_session_path
  end

end
