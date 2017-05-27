class Team < ActiveRecord::Base
    has_many :team_compositions
    has_many :users, through: :team_compositions
    belongs_to :contest
end
