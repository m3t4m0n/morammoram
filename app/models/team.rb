class Team < ActiveRecord::Base
    has_many :users, through: :team_composition
    belongs_to :contest
end
