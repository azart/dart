class OrderMailer < ActionMailer::Base
  default from: "Dart Expo <fasexe@gmail.com>"

  def new_order(order)
    @order = order
    @welcome = Welcome.where(:locale => I18n.locale).first

    mail(:to => "#{@welcome.email}" + (@order.email.nil? ? "" : ", #{@order.email}"),
         :subject => @order.unit.title
    )
  end
end
