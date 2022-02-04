# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data"

all_movies = JSON.parse(File.read(Rails.root.join('./movies.json')))['Video']

all_movies.each do |movie|
    if movie["Genre"].is_a?(Array)
        genres = movie["Genre"].map{ |genre| genre["@tag"] }
    elsif movie["Genre"].is_a?(Object) && movie["Genre"] != nil
        genres = movie["Genre"].values
    else
        genres = []
    end

    # if genres.include?("Horror")
        if movie["Country"].is_a?(Array) && movie["Country"].length>0
            location = movie["Country"][0]["@tag"]
        elsif movie["Country"].is_a?(Array) && movie["Country"].length==0
            location = "Unknown"
        elsif movie["Country"].is_a?(Object) && movie["Country"]
            location = movie["Country"].values.first
        else
            location = "Unknown"
        end

        if movie["Director"].is_a?(Array) && movie["Director"].length>0
            director = movie["Director"][0]["@tag"]
        elsif movie["Director"].is_a?(Array) && movie["Director"].length==0
            director = "Unknown"
        elsif !movie["Director"]
            director = "Unknown"
        elsif movie["Director"].is_a?(Object)
            director = movie["Director"].values.first
        end

        if !movie["Media"].is_a?(Array)
            if movie["Media"]["@audioCodec"] == "aac"|| movie["Media"]["@audioCodec"] == "mp3" || movie["Media"]["@audioCodec"] == "ac3"
                if movie["Media"]["@videoCodec"] == "h264"
                    Movie.create(
                        url: movie["Media"]["Part"]["@key"],
                        title: movie["@title"],
                        rating: movie["@audienceRating"],
                        # sub_genre: genres.find{|genre| genre != "Horror"},
                        sub_genre: genres.first,
                        country: location,
                        duration: movie["@duration"],
                        director: director,
                        description: movie["@summary"],
                        year: movie["@year"],
                        thumbnail_url: movie["@thumb"],
                        art_url: movie["@art"]
                    )
                end
            end
        else
            if movie["Media"][0]["@audioCodec"] == "aac"|| movie["Media"][0]["@audioCodec"] == "mp3" || movie["Media"][0]["@audioCodec"] == "ac3"
                if movie["Media"][0]["@videoCodec"] == "h264"
                    Movie.create(
                        url: movie["Media"][0]["Part"]["@key"],
                        title: movie["@title"],
                        rating: movie["@audienceRating"],
                        # sub_genre: genres.find{|genre| genre != "Horror"},
                        sub_genre: genres.first,
                        country: location,
                        duration: movie["@duration"],
                        director: director,
                        description: movie["@summary"],
                        year: movie["@year"],
                        thumbnail_url: movie["@thumb"],
                        art_url: movie["@art"]
                    )
                end
            end
        end
    # end
end

User.create(username: "hawjetms", email: "hawjetms@gmail.com", password: "1234", password_confirmation: "1234")
User.create(username: "dubbl", email: "dubbl@gmail.com", password: "1234", password_confirmation: "1234")
User.create(username: "turboBot", email: "turboBot@gmail.com", password: "1234", password_confirmation: "1234")
User.create(username: "mousecop", email: "mousecop@gmail.com", password: "1234", password_confirmation: "1234")
User.create(username: "waffle", email: "waffle@gmail.com", password: "1234", password_confirmation: "1234")
User.create(username: "username", email: "username@gmail.com", password: "1234", password_confirmation: "1234")



puts "Seeding Complete 🪴"


