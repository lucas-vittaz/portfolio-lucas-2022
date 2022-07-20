class PagesController < ApplicationController
  def home
    UserMailer.contact().deliver_now
   end

end
