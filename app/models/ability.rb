class Ability
  include CanCan::Ability

  def initialize(user)
       user ||= User.new
       if user.admin?
         can :manage, :all
       else
         can :read, :all
         can :set_lang, Welcome
         #can :create, Feedback
       end
  end
end
