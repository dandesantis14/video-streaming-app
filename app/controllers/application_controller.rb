class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
  
  before_action :authenticate_user
  
private

  def invalid_record(invalid)
    render json: { error: invalid.record.errors.full_message }, status: :unprocessable_entity
  end

  def current_user
    # puts User.find_by(id: session[:user_id])
    @current_user = User.find_by(id: session[:user_id])
  end

  def authenticate_user
    return render json: {error: "Not authorized"}, status: :unauthorized unless current_user
  end

end
