module ContestsHelper
    def tag_icons(tag_list)
        tag_list.map do | tag |
            "<a href='/contests?tag=#{CGI::escape(tag)}' class='tag'>#{tag}</a>"
        end.join(' ').html_safe
    end
end
