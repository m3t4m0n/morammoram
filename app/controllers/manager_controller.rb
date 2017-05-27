class ManagerController < ApplicationController
  before_action :authenticate_user! #로그인을 해야지만 볼 수 있음.
  
  def index
    @contests = Contest.all
    @teams = []
    leaderteams = Team.where(user_id: current_user.id, grade: 2) #본인이 팀인 팀id
    leaderteams.each do |teamid|
      @teams << Team.where(id: teamid.id, grade: 1)
      @teams << Team.where(id: teamid.id, grade: 0)
    end
  end
end
