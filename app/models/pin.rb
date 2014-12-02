class Pin < ActiveRecord::Base
	belongs_to :user

	has_attached_file :image, :styles => { 
					:large => '1000x1000>', 
					:medium => "300x300>", 
					:thumb => "100x100>" },             
					
					:storage => :s3,
          :bucket  => ENV['manfpinteresting']
  
  # Necessario per paperclip 4.0 in poi
  validates_attachment_content_type :image, :content_type => /\Aimage/

end
