class ApplicationController < ActionController::Base
    include Authenticable
def not_found
  render json: { error: 'not_found' }
end
end
