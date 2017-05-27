class Contest < ActiveRecord::Base
    mount_uploader :image, ImageUploader
    acts_as_taggable
    
    has_many :teams
end
